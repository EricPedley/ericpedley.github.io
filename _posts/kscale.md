
## Notes on K-Scale VR Teleop
Most other VR teleop projects have a similar structure, where you have some web app running in the VR headset, connected to some python program that does inverse kinematics and reads images from the camera on the robot, and then sends joint position targets. This repo addresses many shortcomings with a lot of other solutions
- Web app
  - I've seen at least three other projects that use the Vuer python library to host the web interface, and this is easy to set up, but we found that the video streaming had significant latency and if we wanted to display a 3D model of the robot overlaid onto your arms in VR, that it was really laggy. Also, other projects recommend you use `ngrok` or similar service to upgrade the local http interface to https so the VR headset will let you connect, which adds more complication and latency. Our application includes an HTTPS proxy that runs with the frontend, so no sending traffic over the internet and stuff. You could put ngrok in front of this to forward traffic to internet but it's not necessary.
- Inverse kinematics
  - When setting up this project I tried a lot of inverse kinematics libraries but literally none of them worked on the kbot arms. I'm not sure why and it seems like it could've been a skill issue on my part. The solution I ended up arriving at was just doing it from scratch with jax autograd. This not only worked but allowed me to easily tweak things and add some constraints via penalty terms in the optimizer.

Teleop has been done a whopping _5_ times at K-Scale Labs before this project. In chronological order
- https://github.com/kscalelabs/arm-teleop
- https://github.com/kscalelabs/teleop-old
- https://github.com/kscalelabs/teleop_vaishak_repo_temp
- https://github.com/kscalelabs/kbotv2_teleop
- https://github.com/kscalelabs/kteleop

I reused pretty much none of the code from these
- K-OS, the interface layer with the joints from before, is being deprecated, and also doesn't support sending upper body commands at the same time we are running a locomotion policy for balance or movement
- A lot of them used Vuer, which we ditched for performance reasons mentioned above
- Some of them use pybullet for inverse kinematics, which I actually didn't try. I think this probably would've been the next thing I tried if rolling my own with jax didn't work, and I would've done this sooner if I didn't want the learning experience of digging into the lower-level details.
- Some of them just used a puppet to get the joint angles directly.

One of the biggest items for future work is actually getting data out of the system and using it for training policies with imitation learning, which some of those other repos do but this one doesn't. It does produce logs but not of the video stream.

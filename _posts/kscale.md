
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

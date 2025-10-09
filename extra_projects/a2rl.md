# A2RL
![project screenshot](https://github.com/user-attachments/assets/60d43fca-0bf2-4d99-9981-27cc293cee59)
## Description
This year (2025) I had the amazing opportunity to participate in the Abu Dhabi Autonomous Racing League's first annual autonomous drone race. In this competition every team is given an identical quadcopter with a IMU, camera, and jetson orin nx 16gb, and tasked with having the drone fly as fast as possible through a race course. The main challenges are localizing the drone with just the onboard sensors/compute, and designing a planner/controller that will get the drone to fly as fast as possible through the course. Our team, Cyclone Labs, entered the competition as one of fourteen teams with the odds heavily stacked against us: our team consisted of just our manager, three undergrad CS students, and a retired FPV racer, competing against entire labs of grad students. The competition consisted of two qualification stages in November and January, and a final race in April.

<!-- Insert GIF of TU delft flight through the course -->

When I joined the team in october we were very far behind. By the time we had members fly out to Abu Dhabi in November we had yet to get a drone through the course in simulation (Ardupilot SITL + Gazebo) and had only just gotten our onboard indoor localization system to hold the drone in a stable hover. To make matters worse, the only people on-site were the members who didn't code, so it became a huge challenge to coordinate across timezones, and it was during the school-year so we had classes to deal with. We ended up not getting through the qualifier that time, which meant we had to go back in January for our last chance to qualify for the finals.


<!-- Insert GIF of drone hovering at fullerton lab with rviz -->

January came faster than expected and progress had been slow. However, things were different this time, as I got to fly out to Abu Dhabi to be on site for two weeks to test our algorithms with the drone and debug. Those two weeks were probably the most productive I've ever been in my entire life. The first few days on site I was focused on speeding up our perception so it could run in real-time on the drone. At that point I was using keypoint matching to identify known points on the surface of the racing gates and then use PnP to figure out the pose. However, even after that got fast enough, it still was giving inconsistent results, especially when the drone could see multiple gates. At that point I took a gamble and discarded all that work to switch to deep learning for localizing keypoints. 

<!-- Insert GIF of sift / orb detection and matching -->

At first I had our manager labeling the corners of the gates manually but I realized that it would take too long to get a decent-sized dataset and that there was still risk we wouldn't get a good model out of it. Then I came up with a risky idea: rely entirely on synthetic data. I spent a day writing a synthetic data generation pipeline and then trained a model overnight. And it blew me away how well it worked! With this approach and some extra work for filtering and data association, we passed the qualifier stage!

<!-- Insert GIF of keypoint detection on IRL video -->
<!-- Insert video of qualification run -->

TODO: write more

<!-- 
Outline:
1. introduction: what is the competition, what was my role on the team
2. qualifier stage
3. finals
4. what's next
 -->
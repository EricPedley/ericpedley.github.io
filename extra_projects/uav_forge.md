# Student Unmanned Aerial Systems
![project screenshot](/images/uavf_compilation.gif)
## Description
Student Unmanned Aerial Systems is an international competition where teams build autonomous UAVs to complete objectives similar to search and rescue and package delivery. I was on the UC Irvine team (UAV Forge) from sophomore to senior year, and lead the Perception subteam the last two years. Over the course of my involvement the team went zero to our first successful physical testing and winning 7th place out of ~50 international teams at the 2025 competition (1st in the US). During my time on the team I developed broad skills in computer vision, UAVs, and systems engineering.

### Perception System Development

Built the core perception pipeline including camera interfaces, object detection, and target tracking
Integrated multiple camera types (SIYI gimbals, USB cameras, CSI cameras, Arducam) with unified interfaces
Implemented gimbal control and ROI tracking capabilities
Developed camera projection and calibration systems

### Simulation and Testing Infrastructure

<!-- ![project screenshot](/images/uav_forge/gazebo_testing.png) -->
- Created comprehensive automated testing scripts for end-to-end mission validation in Gazebo
- Built target spawning and scoring systems for simulation
- Developed scripts to run missions repeatedly for performance benchmarking
- Achieved ~180-318 point average scores in simulation testing

### Deployment, Logging and Visualization

- Went out for countless real life testing sessions with the drone
- Built comprehensive logging systems for perception data
- Created video generation tools from logged data with pose visualization

### Object Detection and Tracking

Integrated YOLO models for target detection (#142, #148, #224)
Implemented TensorRT optimization for Jetson deployment (#148)
Developed tracking algorithms using Ultralytics (#216, #224)
Created drone detection and obstacle avoidance systems (#126, #194)

### Technical Leadership

- Architected full perception system involving real-time processing requirements, testability, and sensor synchronization.
- Reviewed over 80 pull requests across 10 different members
- Collaborated with other teams for systems integration
# RN-Chat2

Before Running this: Create your own Firebase real-time database; and edit src/Backend.js -->> 
and put your own firebase credentials there or else it wont run. 
- - - -
About RN-Chat2:

React Native Chat App that uses Firebase Realtime Database as backend and the react native module "Gifted Chat" for the UI.

Features-->

(1) It uses Firebase Realtime Database - a no-sql database as back-end.

It includes support for sending and receiving notifications of database updates 
i.e: clients are informed about messages sent or received from others - via cloud notifications.

Thus RN-Chat2 allows for scalability to thousands of simultaneous users; also,  cloud notifications 
in milli-seconds - often in under 40 milliseconds - to inform of new messages received.


(2) RN-Chat2 also uses Gifted-Chat react native module for the front end / UI functions; allowing 
for a UI which can be easily customised or skinned to look totally different or themed differently.

Why did we make this ?

We originally made it, because after the Gifted-Chat module was released in 2016 - we found 
that as of 2020, most sample programs demonstrating use of gifted chat would break based on 
modern firebase UI etc libraries.

Also, the react-native-router-flux library is not just obsolete, but importing it's 
dependencies introduces bugs in code.

Hence, it's important to replace any usage of react-native-router-flux with modern
firebase navigation - a non intuitive task - and this app RN-Chat2 makes this task 
easier and more doable by providing sample code which demonstrates Gifted-Chat module
usage with modern (works oct 2020) React Native navigation.

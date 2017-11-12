# Nodes for Cadmus Homework
## Task 1
* Instruction panel is styled as required
* A  RelativeDate component is added to calculate realtime relative date.
* When a user clicks a reference, the time is recorded in Redux to identify the state of the reference. The reference list will re-render to put the fresh reference on the top.

## Task 2 
* Debounce is introduced to improve the performance. When key up event is triggered, clear previous timeout function and then set a new timeout to delay the word-counting feature. Through this method, only when users stop typing for a while (500ms), the word-counting function can run.
* Word-count  is updated to Redux every time there is a new version of word-count

## Task 3
* Introduction and Progress panels have their own state stored in Redux to identify which one to render.
* To get the data of the graph, ‘titlebar’ is used to store the word-count  number every minute in an array. In this way, the index of each item is the number of minute. E.g [0, 20, 50] means at first, second and third minute, the word-count are 0, 20 and 50. _(To test the data, 5 sec is set to record the word-count rather than 1 min)_
* To draw the graph, chartJS is used. A horizontal line is given to show the word-limit and the graph is changing based on time. 
* ‘time spent so far’ is the length of the word-count array. Estimated finish time is based on the average of typing.

## Task 4
* After reading the code, it is found that only the materialPaneSize needs to be stored in Redux. 
* The logic of Toggle is:
paneSize !== 1 ? record paneSize and update it to 1 in Redux
				: (paneSize is pre-recorded) ? update Redux, clear Local
										    :  do nothing…

## Task 5
My idea is to use websocket to achieve real-time co-work function for the type of group assignment. To make it easier, my specific plan is to use firebase as the backend service, because of its realtime database. The ideal situation is that two or more clients can modify the data in database concurrently and the result will be displayed to each application. To differentiate the work from others, I plan to add auto tag to each sentence they type. E.g <Gary>Cadmus is awesome</Gary>.
The idea seems quite straight forward. To connect Redux with Firebase, I believe I should do some work on react-thunk to manipulate the middleware of redux, so the data flow should be:
	      Component - Action    Reducer - Redux
						\	 /
				            Middleware
						    |
						Firebase
There is a library called redux-react-firebase which can make things easier.

However, it takes more time than I thought…
In a hurry to submit my homework before overdue, this feature can only be a idea at the moment.

## Conclusion
A good homework makes you feel a bit stressed at the first sight, practice your skills when you deal with it, gives you a sense of  accomplishment when you finish it and inspires you to learn more in the future. I think this is a good homework.

Cheers,

Gary
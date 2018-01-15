You can install the local packages using either `npm`, or `yarn`. After which
you can run the `start` script which will run the `create-react-app` webpack
dev server.

`npm start` or `yarn start`

The base entry route at which the main `<App />` renders is
`/work/:workId/editing`. Right now, the `:workId` route param is a filler and
can be anything. For example, you can access the app at
http://localhost:3000/work/123/editing to view the app.

## App Layout

The build system uses the latest
[`create-react-app`](https://github.com/facebookincubator/create-react-app)
setup, with the following libraries:

- [`redux`](https://redux.js.org/) - for reactive state management.
- [`material-ui`](http://www.material-ui.com) for reusable React components.
- [`react-router`](https://github.com/ReactTraining/react-router) for declarative client side routing.
- [`react-split-pane`](https://github.com/tomkp/react-split-pane) for a split pane interface.
- [`slate`](https://docs.slatejs.org/) and [`slate-react`](https://docs.slatejs.org/slate-react/editor) for a React based rich Editor.

The App is entirely client side, and sets itself up with a pre-filled Redux
state. For more information on this structure look at the [root reducer
definition](/src/reducers/index.js). There is no persistence facilities
available or needed. All the tasks are assumed to work with just the ephemeral
Redux in-memory state 

### Component Hierarchy

The component hierarchy follows a preset nomenclature which is also used
internally to talk about a Student's *Work*. A Student submits an unique *Work*
against a given Assessment *Instructions*. This is a *Submission*. Imagine the
Student's work-space to be a *Desk* placed below a *Shelf*. The *Desk* is where
a Student composes their *Work*. While completing their *Work* a student has
access to some *Materials* on the *Desk* laid out alongside their *Work*. These
*Materials* will include the *Instructions* sheet (from the lecturer), *Notes*,
and more.

A *Work* can be in three states: *Editing* (default), *Preview* (read-only),
and *Submitted* (post submission). Each one of these *states* gets a
route. However, for this task, we will only consider the *Editing* route.

This dictates the component tree:

```
App
|-- SubmissionRoute (has 3 main routes)
    |-/ SubmissionEditing  (/:workId/editing)
        |-- Shelf
            |-- Titlebar
                |-- Title
                |-- Infobar
                |-- SubmissionAction
            |-- Toolbar

        |-- DeskEditing
            |-- SplitPane
                |-- Materials
                    |-- Instructions
                |-- Work

    OR
    |-/ SubmissionPreview (/:workId/preview)

    OR
    |-/ SubmissionSubmitted (/:workId/submitted)

```

### Main Features:
## Instructions Sheet: 
* Instruction panel is styled as required
* A  RelativeDate component is added to calculate realtime relative date.
* When a user clicks a reference, the time is recorded in Redux to identify the state of the reference. The reference list will re-render to put the fresh reference on the top.

## Word Count 
* Debounce is introduced to improve the performance. When key up event is triggered, clear previous timeout function and then set a new timeout to delay the word-counting feature. Through this method, only when users stop typing for a while (500ms), the word-counting function can run.
* Word-count  is updated to Redux every time there is a new version of word-count

## Progress Panel
* Introduction and Progress panels have their own state stored in Redux to identify which one to render.
* To get the data of the graph, ‘titlebar’ is used to store the word-count  number every minute in an array. In this way, the index of each item is the number of minute. E.g [0, 20, 50] means at first, second and third minute, the word-count are 0, 20 and 50. **_(To test the data, 5 sec is set to record the word-count rather than 1 min!!!)_**
* To draw the graph, chartJS is used. A horizontal line is given to show the word-limit and the graph is changing based on time. 
* ‘time spent so far’ is the length of the word-count array. Estimated finish time is based on the average of typing.

## Window Size
* Implement window toggling button (max-normal) by capturing window size and storing in redux / Implement split window dragging feature.

# Cadmus Homework Task

Welcome to the Cadmus Homework task.

This task is setup to introduce you to the Cadmus Student environment (the
front end), technically and conceptually. The Task involves writing and
designing React components (in JS) to extend the feature set of a pre-existing
app.

## Task Setup

While attempting the Homework task you will push code to your *master* branch
directly. A fresh Git version control has been setup.

There are **5 tasks** (including a bonus free-for-all) given below. We would
like you to complete at least one task, but feel free to do more
:sunglasses: if you have the time. Please pick the tasks that show off the best
of your abilities. If you want to show off something that isn't in a task, the
final task is a wild-card where you can design your own task!

## Running the code

You can install the local packages using either `npm`, or `yarn`. After which
you can run the `start` script which will run the `create-react-app` webpack
dev server.

`npm start` or `yarn start`

The base entry route at which the main `<App />` renders is
`/work/:workId/editing`. Right now, the `:workId` route param is a filler and
can be anything. For example, you can access the app at
http://localhost:3000/work/123/editing to view the app.

**Code Style**

- We follow the `airbnb` JS [style
  guide](https://github.com/airbnb/javascript). However for this app, we
  haven't set up strict linting rules (just the default `create-react-app`
  eslint)

- The style sheets are all in plain `CSS`, co-located with their respective
  components.

## App Layout

This App is setup as a bare-bones replica of our actual Student App featuring a
tiny subset of the stack we use in production. The build system uses the latest
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
Redux in-memory state (which is reset on refresh).

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

This dictates our component tree:

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


### App State

Our entire local App State is stored in a Redux tree. We won't worry about
*hydrating* this tree through a Network call. Let's just assume that step has
already filled our Redux tree (in production we can use a well-typed
[GraphQL](http://graphql.org/learn/) call to do this).

The given preset Redux tree contains a *Manifest* and *Editors* save data (can
be extended). A *Manifest* describes the entire Assessment setup for the
Student client. It should always contain all the information needed for the
Student to complete their work in this client. Think of it as the immutable
*Model* for the Student app *View* (completes the *Flux* or *Functional
Reactive* pattern). If we did have a real network request, the client will
fetch the full Manifest before setting up the client Redux state.

The *Manifest* is mostly read-only with respect to the Student client. The
student client can send events to a back-end API which will generate a new
Manifest to replace the current one (rendering a fresh Student app *View*). For
example: the *submission* event.

The *editors* redux leaf stores the latest `slate` Editor `Value`s for the
various Slate Editors in the App. The Slate `<Editor />` components dispatch
actions (on every change) which updates these Editor Values.

You are encouraged to freely add more stores/reducers to the Redux tree (to
keep your components *Pure*) when you complete the tasks below.

## Tasks

These tasks attempt to get this rendition of the Student environment feature
complete (at least to some extent).

### Task 1 - Instructions Sheet Components

The current *Instructions* sheet looks quite plain. The data for the
*Instructions* sheet comes from the Manifest. Your task is to complete the
*Instructions* Component given below. You can use *material-ui* components to
make it look nicer if you want. We want to see how well you adapt a visual
design into React.

The given design is a guideline, not a final state. You can tweak whatever you
want. Just make it look nice.

**Bonus:**

Make the *Instructions* sheet more interactive. You can implement any of the
ideas below, or come up with your own:
- Relative due date. Give the students some sense of urgency.
- *Seen once* resources: Let the student know they have opened a particular
  resource before.

### Task 2 - Word Count information

Students love seeing an active word count as they compose their *Work*. No one
wants to go over or below the word count limit set by the Lecturer. You will
implement an updating *Word Count* feature based on the design below.

An active word count calculation is going to be an intensive process and can
cause performance problems if done on every keystroke. There are a lot of
strategies you could employ to optimise the live word count so that we can
give the student's the best experience possible.

**Notes:**

- The word count should be for the main *Work* editor. This is the `body` value
in the *editors* redux store. (Look at the container `<WorkWithState />` to see
how this is accessed)
- You will have to skim the *slate* editor documentation to learn how to pull
  the text from a slate `Value`.
- The definition of what counts as a word can vary. You may have noticed that
  Google Docs and Microsoft Word will give you different wordcounts for the same
  piece of text. We aren't too worried about getting the wordcount super
  accurate, as long as it is consistent and easy to understand.


### Task 3 - Progress information pane

Statistics are awesome. Students can assess themselves better if given more
information on their progress. Unfortunately, since we are avoiding the need
for a back-end and persistence for the task, we won't have multiple sessions to
aggregate data over.

Your task involves creating a *Progress* section inside the existing
*Materials*** Pane based on the design given below.

**Notes:**

- The *Materials* Pane currently has only one available section called
*Instructions*. You will have to create a working tab layout as shown in the
design, so that you can freely switch between *Instructions* and the new
*Progress* pane without affecting the rest of the layout.
- The word stats graph is for the current session (as we have no
persistence). So your x-axis granularity should be small (in minutes perhaps).
- You can use a charting library if you want or build a simple one
  yourself. The given design is a rich *mock-up*. It doesn't have to match
  pixel-to-pixel.
- You can add more stats if you want.

### Task 4 - Pane configurations

There is an unused button on the right hand side of the *Toolbar** which can be
used to toggle between the collapsed state of the panes or some default open
state. Your task is to implement this toggle.

**Notes:**

Currently the *state* of the pane dimensions are stored in the `<DeskEditing
/>` component. You may choose to move this to a Redux state and emit actions to
update these.

### Task 5 - Bonus surprises

This is an open-ended task where you can freely add features and improvements
to the current Student client. Show us what more can we do for our users in the
Student Environment. These bonus features don't have to be complete
implementations, but can be illustrated idea.

You could implement features interacting with the Slate editors (you will have
to dive into the `slate` documentation). Or you could add more tabs to the
*Materials* section to provide more tools for the Students. Feel free to change
anything.

## Screenshots and Design

These are the reference designs for the tasks above. Don't take these designs
as gospel or final. We want you to employ your creativity and make your own UX
decisions.

You can build your own components or use the pre-existing `material-ui`
components.

### Instructions Sheet

![Instructions](/screenshots/instructions.png?raw=true "Instructions Design")

### Word Count in Titlebar

![Word count](/screenshots/wordcount.png?raw=true "Word Count")

### Progress Pane

![Progress](/screenshots/progress.png?raw=true "Progress")

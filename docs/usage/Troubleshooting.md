# What should i do when i get in trouble?

When i find my self in times of trouble, this small readme comes to me.

In this doc we will share with you how we are finding our way around, when struggling with a component, step by step:

1. Check whether there is an example that fits your scenario in the [storybook](https://wix-wix-style-react.surge.sh/).
2. Check the [Cheetsheet](https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Components%20Cheatsheet&full=0&addons=0&stories=1&panelRight=0) - sometimes the answer can come from there. 
3. Use the [Playground](https://wix-wix-style-react.surge.sh/?selectedKind=Introduction&selectedStory=Playground&full=0&addons=0&stories=1&panelRight=0) to easily test the component abilities.
4. For each component in the library we have many tests, you can learn from them on how to use/test the component. Checkout the [sourcecode](https://github.com/wix/wix-style-react)
5. Create a new [Yoshi](https://github.com/wix/yoshi) project to serve as a clean enviornment to test the component - isolate all the noise you got from your own project.
6. Strip down abilities until you get to the bottom of it. Saying we have for example the `<Table/>` component which does not work as we expect it to. All the above steps did not help us. The thing we would do is one of the 2:
    - Take the most basic and clean table example and on top of it add your own feature in small parts.
    - Take your current code which does not work and strip it's features slowly, one by one, until you reach to the point where things are working, then slowly add them back again so you will be able to find the root cause of the problem.
7. Still stuck? Let's debug.
   It is very easy to run the storybook on your local machine.
   Instructions can be found [here](https://github.com/wix/wix-style-react/blob/master/CONTRIBUTING.md).
   We suggest placing `debugger` inside the story of your rebellious component. For example [Table story](https://github.com/wix/wix-style-react/blob/1b3e00fb624929927b3921905f8db8bdb011c427/src/Table/docs/index.story.js).
8. Still stuck? Use our slack channel `#wix-style-react`. Often you will be able to find your answer by using the Search in the channel and if not, just talk to us. (You are of course welcome to talk to us before step 8 :-) )


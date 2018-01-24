constructor(1. Collect your ingredients. (2 slices bread, 1-2 butter knives, 1 jar peanut butter, 1 jar jelly or jam))
componentWillMount(2. Open jar of peanut butter by twisting the lid counter-clockwise.)
render(3. Pick up a butter knife by the handle and insert into the jar of peanut butter)

componentDidMount(4. Withdraw the knife from the peanut butter, and evenly spread it onto one slice of bread.)
componentWillReceiveProps(5. Grab a second slice of bread)

shouldComponentUpdate(6. Repeat steps 2-4 with second slice of bread, using jelly instead of peanut butter.)

componentWillUpdate(6. )

render(6. )

componentDidUpdate()
componentWillUnmount(8. Cut the sandwich diagonally using one of the knives.)




constructor()
- Called before it is mounted
- the right place to initialize state
componentWillMount()
- Invoked immediately before mounting occurs
- called before render
- we recommend using constructor instead
render()
- required
- should examine props and state
- should be pure does not modify state
componentDidMount()
- invoked immediately after a component is mounted
- calling setState in this method will trigger an extra rendering, but it will happen before the browser updates the screen
- guarantees that render is called twice but the user won't see the immediate state
componentWillReceiveProps()
- is invoked before a mounted component receives new props
- only calls this method if some of component's props may update
shouldComponentUpdate()
- invoked before rendering when new props or state are being received
- not called before initial rendering
componentWillUpdate()
- invoked immediately before rendering new props or state are being received
- not called at initial render
componentDidUpdate()
- invoked immediately after updating occurs
- not called for initial render
componentWillUnmount()
- invoked immediately before component is unmounted and destroyed

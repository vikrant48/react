# React Interview Questions and Answers

## Beginner-Level Questions

### 1. **What is React?**
   React helps build user interfaces by letting you create reusable components. It's maintained by Meta (formerly Facebook) and uses a virtual DOM for better performance.

### 2. **What are the differences between functional and class components?**
   - **Functional Components**: 
     - Simple JavaScript functions.
     - Use React hooks for state and lifecycle methods.
     - Easier to read and test.
   - **Class Components**: 
     - ES6 classes extending `React.Component`.
     - Use lifecycle methods like `componentDidMount`.
     - More verbose compared to functional components.

### 3. **What is JSX?**
   JSX lets you write HTML-like code in JavaScript, making it easier to design interfaces.
   ```jsx
   const element = <h1>Hello, World!</h1>;
   ```

### 4. **What is the Virtual DOM, and how does it work?**
   The Virtual DOM acts like a "draft version" of the real DOM. When something changes, React updates the Virtual DOM, compares it with the previous version (diffing), and efficiently applies the updates to the real DOM.

### 5. **What are props in React?**
   Props (short for properties) are like labeled packages sent from a parent component to a child component. They're immutable and help keep components pure.
   ```jsx
   function Greeting(props) {
     return <h1>Hello, {props.name}!</h1>;
   }
   ```

### 6. **What is state in React?**
   State is like a component's personal notebook—it keeps track of changes and can be updated. Unlike props, state is mutable.
   ```jsx
   const [count, setCount] = useState(0);
   ```

### 7. **Explain the React lifecycle methods.**
   - **Mounting**: `constructor`, `componentDidMount`.
   - **Updating**: `componentDidUpdate`.
   - **Unmounting**: `componentWillUnmount`.

### 8. **What is the difference between `state` and `props`?**
   - `State` is local to a component and can be changed within the component.
   - `Props` are passed from parent to child and are read-only.

### 9. **How do you pass data from a parent component to a child component?**
   Data is passed via props:
   ```jsx
   <ChildComponent name="Vikrant" />
   ```

### 10. **What are React fragments?**
   Fragments let you group multiple elements without unnecessary wrapping tags, keeping your code clean.
   ```jsx
   <>
     <h1>Hello</h1>
     <p>World</p>
   </>
   ```

## Intermediate-Level Questions

### 1. **What are React hooks?**
   Hooks are functions that let you use state and lifecycle features in functional components.
   - `useState`: Manages state.
   - `useEffect`: Handles side effects like fetching data or subscriptions.

### 2. **What is the Context API?**
   The Context API allows you to share state across components without manually passing props through every level.
   ```jsx
   const ThemeContext = React.createContext('light');
   ```

### 3. **What is the purpose of `useReducer`?**
   `useReducer` is great for managing complex state logic. It uses a reducer function to update the state.
   ```jsx
   const [state, dispatch] = useReducer(reducer, initialState);
   ```

### 4. **What is the significance of keys in React lists?**
   Keys help React identify which items in a list have changed, ensuring efficient re-rendering. Without keys, React may not update correctly.

### 5. **What are controlled and uncontrolled components in React?**
   - **Controlled**: Form elements controlled via state.
   - **Uncontrolled**: Form data handled by the DOM.

### 6. **Explain higher-order components (HOC).**
   HOCs are functions that take a component and return a new one with added functionality.
   ```jsx
   const EnhancedComponent = withLogging(Component);
   ```

### 7. **What is React Router?**
   React Router enables navigation between views or components in a React app.
   ```jsx
   <Route path="/about" element={<About />} />
   ```

### 8. **What are synthetic events in React?**
   Synthetic events are React's way of handling browser events consistently across different browsers.

### 9. **How can you optimize React app performance?**
   - Use React.memo.
   - Implement lazy loading.
   - Use `useCallback` and `useMemo` to prevent unnecessary re-renders.

### 10. **What is Prop Drilling, and how do you avoid it?**
   Prop drilling happens when props are passed through multiple levels unnecessarily. Avoid it by using the Context API or state management libraries like Redux.

## Advanced-Level Questions

### 1. **What is Server-Side Rendering (SSR) in React?**
   SSR renders React components on the server, improving SEO and initial load time.

### 2. **What is the difference between `useEffect` and `useLayoutEffect`?**
   - `useEffect`: Runs asynchronously after rendering.
   - `useLayoutEffect`: Runs synchronously after DOM mutations.

### 3. **What is Redux, and why is it used?**
   Redux helps manage the state of your app predictably and efficiently.

### 4. **What are the differences between Redux and Context API?**
   - Redux is better for managing complex state.
   - Context API is simpler for small to medium applications.

### 5. **What are React Portals?**
   Portals let you render elements into a different part of the DOM hierarchy.
   ```jsx
   ReactDOM.createPortal(child, container);
   ```

### 6. **Explain React Refs.**
   Refs allow you to directly access and manipulate DOM elements or React components.
   ```jsx
   const ref = useRef(null);
   ```

### 7. **What is code splitting in React?**
   Code splitting lets you load only the JavaScript needed for a specific page or feature using `React.lazy` and `Suspense`.

### 8. **What is the difference between React.memo and useMemo?**
   - `React.memo`: Prevents re-rendering of a component if its props haven't changed.
   - `useMemo`: Memoizes a value within a component to avoid expensive recalculations.

### 9. **How do you handle error boundaries in React?**
   Error boundaries catch JavaScript errors in child components and display a fallback UI.
   ```jsx
   class ErrorBoundary extends React.Component {
     componentDidCatch(error, info) {}
     render() { return this.props.children; }
   }
   ```

### 10. **What is the significance of the `strict mode` in React?**
   Strict Mode helps you catch potential problems like deprecated APIs or unintended side effects during development.

## Coding-Based Questions

### 1. **Create a simple counter app using hooks.**
   ```jsx
   function Counter() {
     const [count, setCount] = useState(0);
     return (
       <div>
         <p>Count: {count}</p>
         <button onClick={() => setCount(count + 1)}>Increment</button>
       </div>
     );
   }
   ```

### 2. **Build a to-do list app where tasks can be added, marked as complete, and deleted.**
   ```jsx
   // Implementation depends on useState for managing the tasks.
   ```

### 3. **Implement a search bar with live filtering of a list of items.**
   ```jsx
   const [query, setQuery] = useState("");
   const filteredItems = items.filter(item => item.includes(query));
   ```

... (Additional coding examples provided in implementation context)

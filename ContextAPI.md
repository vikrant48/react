## Context API in React

The **Context API** in React is a built-in state management solution that allows you to share data between components without passing props manually at every level. It is useful for managing global state like themes, authentication, user data, or language preferences.

---

### **How Context API Works**
1. **Create a Context** – Define a context using `React.createContext()`.
2. **Provide the Context** – Use the `Provider` component to wrap the part of your app where you want the state to be accessible.
3. **Consume the Context** – Use either `useContext()` hook or the `Context.Consumer` component to access the context value.

---

[chart Link](https://excalidraw.com/#json=UXJfeHpfuzg2cBn5nGICR,N3GgfryKmyggUM0H0a278g)

### **Example: Using Context API**
#### **1. Creating the Context**
```jsx
import { createContext, useState } from "react";

export const ThemeContext = createContext(); 

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
```

#### **2. Providing the Context in App**
```jsx
import React from "react";
import { ThemeProvider } from "./ThemeContext";
import Home from "./Home";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
};

export default App;
```

#### **3. Consuming Context in a Component**
```jsx
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className={theme === "light" ? "bg-white text-black" : "bg-black text-white"}>
      <h1>Current Theme: {theme}</h1>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Home;
```

---

### **Why Use Context API?**
✔ **Avoids Prop Drilling** – No need to pass props through multiple layers.  
✔ **Centralized State Management** – Ideal for app-wide data like themes, auth, or settings.  
✔ **Simpler than Redux** – Lightweight and easy to use for small to medium projects.
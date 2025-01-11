## notes 

```
Key Differences
Dependencies in useCallback:
- Dependency changes recreate the function reference.
- Optimizes functions used in child components to prevent unnecessary re-renders.
Dependencies in useEffect:
- Dependency changes re-trigger the effect.
- Used for side effects, such as fetching data, setting up subscriptions, or cleaning up.

```
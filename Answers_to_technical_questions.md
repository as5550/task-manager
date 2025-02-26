1. How long did you spend on the coding test? 

The coding test was time-constrained, and I completed it within the allotted time. I spent about 10 hours on the coding test. I focused on writing clean, efficient code and thoroughly testing the solution on every stage with all the edge cases.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

In React, React 18 introduced several exciting features, but the most useful new feature is:

Concurrent Rendering (Concurrent Mode) - 
Concurrent Rendering allows React to work more efficiently by breaking down rendering work into chunks, which can be prioritized and scheduled. This improves the responsiveness of large applications and makes React apps feel faster, especially when rendering complex UI or data-heavy pages.

One specific feature within this is useTransition, which allows you to keep the app responsive even during large updates, like loading lists, updating the UI with new data, or performing tasks in the background without blocking user interactions.
Code Snippet -> 
```
import { useTransition, useState } from 'react';

function App() {
  const [isPending, startTransition] = useTransition();
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    startTransition(() => {
      setInput(event.target.value);
    });
  };

  return (
    <div>
      <input type="text" value={input} onChange={handleChange} />
      {isPending ? "Loading..." : "Finished!"}
    </div>
  );
}
```

3. How would you track down a performance issue in production? Have you ever had to do this?

Tracking down performance issues in production can be challenging, but React offers a variety of tools and strategies to help pinpoint and resolve these issues. Here’s how I would approach it:
- Implement custom logging to capture performance-related events. For instance, log when large state updates occur or when re-renders are triggered.
- Use monitoring tools like Google Analytics, New Relic, or Sentry to track performance bottlenecks, user interactions, and errors in real time
- Also In production, Profiler API can be enabled in the code. The Profiler records the performance of each render and gives insights into what components are slow and why.

Once I had to track down a performance issue in production as the dashboard was working slow as reported by a few clients. I used logs to check this.
And then later to reduce the loading time i used code splitting and dynamic import.

4. If you had more time, what additional features or improvements would you consider adding to the task management application?

If I had more time then I would have added these features 
- User Authentication & Authorization
- Task Assignment & Collaboration
- Drag and Drop Task Management
- Dark Mode / Light Mode
- worked more on the css part to make the UI look good

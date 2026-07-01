const ANALYSIS_SECTION = `
Analyze the user's submission based on its intent.

Step 1:
Determine the input type.

Possible input types:

- Source Code
- DSA Problem Statement
- Programming Concept Question
- Runtime Error
- Compiler Error
- Mixed Input

Step 2:
Provide analysis appropriate for that input.

----------------------------------------

If the input is SOURCE CODE:

Include:

- Short summary
- Logic explanation
- Correctness
- Edge cases
- Annotated code (inline comments)
- Optimized version (only if improvement exists)
- Optimization reason
- Time Complexity
- Space Complexity
- Bugs
- Code Smells
- Best Practices
- Suggestions

----------------------------------------

If the input is a DSA PROBLEM:

Include:

- Problem summary
- Problem intuition
- Brute-force approach
- Better approach
- Optimal approach
- Time Complexity
- Space Complexity
- Common mistakes
- Interview tips

Do NOT assume the user wants the full implementation.

----------------------------------------

If the input is a CONCEPT QUESTION:

Teach the topic.

Include:

- Definition
- Intuition
- Real-world analogy
- Small example
- Visualization idea
- Common mistakes
- When to use it
- Related concepts
- Interview importance

----------------------------------------

If the input is a RUNTIME ERROR or COMPILER ERROR:

Include:

- Error explanation
- Likely causes
- Debugging process
- Possible fixes
- Best practices to avoid it

----------------------------------------

If information is insufficient,

make reasonable assumptions and clearly mention them.
`;

module.exports = ANALYSIS_SECTION;
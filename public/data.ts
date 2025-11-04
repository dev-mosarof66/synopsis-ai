const mockData = {
  title: "How AI Works – An Overview of Artificial Intelligence Concepts",
  summaries: [
    {
      title: "Introduction to Artificial Intelligence",
      description: [
        "Artificial Intelligence (AI) is a branch of computer science that enables machines to perform tasks that typically require human intelligence.",
        "These tasks include learning from data, recognizing patterns, understanding language, and making decisions."
      ]
    },
    {
      title: "Core Components of AI",
      description: [
        "**Machine Learning (ML):** The process of training models to identify patterns and make predictions based on data.",
        "**Deep Learning:** A subset of ML that uses neural networks with multiple layers to process complex data such as images, speech, and text.",
        "**Natural Language Processing (NLP):** Enables machines to understand, interpret, and respond to human language.",
        "**Computer Vision:** Allows systems to interpret and analyze visual information from the world, such as images and videos."
      ]
    },
    {
      title: "How AI Systems Learn",
      description: [
        "AI systems learn through **data-driven training**. They are provided with large amounts of labeled or unlabeled data.",
        "In **supervised learning**, models learn from labeled examples (input-output pairs).",
        "In **unsupervised learning**, models discover hidden patterns without explicit labels.",
        "In **reinforcement learning**, an agent learns by interacting with an environment and receiving rewards or penalties based on its actions."
      ]
    },
    {
      title: "Applications of AI",
      description: [
        "AI is used in **speech assistants** (like Siri, Alexa, and Google Assistant) to understand and respond to voice commands.",
        "In **healthcare**, AI assists in diagnosing diseases, analyzing medical images, and predicting patient outcomes.",
        "In **finance**, AI powers fraud detection, risk analysis, and automated trading systems.",
        "AI also plays a role in **autonomous vehicles**, **recommendation systems**, and **cybersecurity**."
      ]
    },
    {
      title: "Ethical and Practical Considerations",
      description: [
        "AI development raises important ethical questions related to **bias**, **privacy**, and **accountability**.",
        "Ensuring that AI systems are **transparent** and **fair** is a key challenge.",
        "Researchers and policymakers are working on frameworks for **responsible AI** to minimize unintended harm."
      ]
    },
    {
      title: "Conclusion",
      description: [
        "AI works by combining data, algorithms, and computational power to mimic aspects of human intelligence.",
        "Its continued evolution promises major breakthroughs across industries, but also demands thoughtful oversight to ensure positive impact on society."
      ]
    }
  ]
};

const response = {
    "title": "Advanced Algorithms and Data Structures Implementations",
    "summaries": [
        {
            "title": "Sorting Algorithm Analysis: Quick Sort vs Merge Sort",
            "description": [
                "Analyzes Quick Sort and Merge Sort based on implementation, performance, and data suitability.",
                "Quick Sort is a divide-and-conquer algorithm using a pivot; average O(n log n), worst-case O(n^2).",
                "Merge Sort is also divide-and-conquer, guaranteeing O(n log n) performance.",
                "Quick Sort is often faster in practice due to cache performance and in-place sorting.",
                "Merge Sort is stable and predictable, making it suitable for guaranteed performance.",
                "Performance data shows Quick Sort is generally faster for larger datasets with optimizations."
            ]
        },
        {
            "title": "Implementation of Radix, Bucket, and Counting Sort",
            "description": [
                "Focuses on non-comparison-based sorting algorithms: Counting Sort, Bucket Sort, and Radix Sort.",
                "Counting Sort is for small integer ranges (e.g., student scores 0-100), offering linear time complexity.",
                "Bucket Sort is effective for uniformly distributed floating-point values (e.g., sensor data [0,1)).",
                "Radix Sort processes numbers digit by digit, using a stable sort like Counting Sort.",
                "Provides JavaScript code for Counting Sort (student score normalization) and Bucket Sort (sensor data analysis).",
                "Emphasizes that specialized sorting algorithms efficiently solve domain-specific problems."
            ]
        },
        {
            "title": "Implementation of Splitting a Number with Required Range",
            "description": [
                "Addresses the problem of proportionally splitting a total number into integer parts based on weights.",
                "The algorithm calculates a scaling factor and assigns `floor(weight * p)` for initial splits.",
                "The last split is adjusted to ensure the total sum is exactly preserved.",
                "Includes JavaScript code for a `proportionalSplit` function.",
                "Useful for proportional allocation problems like budgeting and resource distribution."
            ]
        },
        {
            "title": "Implementation of Matrix Multiplication using Divide & Conquer",
            "description": [
                "Implements matrix multiplication using a Divide and Conquer strategy to handle large matrices.",
                "Breaks down n x n matrices into four n/2 x n/2 submatrices, recursively multiplies them, and combines results.",
                "The classical divide and conquer approach still yields O(n^3) time complexity.",
                "Provides JavaScript functions for matrix addition, splitting, combining, and recursive multiplication.",
                "Highlights the conceptual elegance and parallelization potential, despite potential memory and recursion overhead."
            ]
        },
        {
            "title": "Implementation of Matrix Multiplication using Strassen’s Algorithm",
            "description": [
                "Implements Strassen's algorithm to improve matrix multiplication speed beyond O(n^3) to O(n^2.81).",
                "Utilizes a divide-and-conquer approach by computing seven specific products recursively instead of eight.",
                "Works best when matrix dimensions are powers of 2, potentially requiring padding for others.",
                "Includes JavaScript functions for matrix addition, subtraction, splitting, combining, and the `strassen` algorithm.",
                "Notes that while faster for large matrices, it may require more memory and can be less numerically stable."
            ]
        },
        {
            "title": "Implementation of Dijkstra’s Algorithm",
            "description": [
                "Finds the shortest path from a source node to all other nodes in a directed weighted graph with non-negative edge weights.",
                "A greedy algorithm that uses a MinHeap (priority queue) to efficiently extract the next closest vertex.",
                "Initializes distances, iteratively relaxes edges, and updates shortest path estimates.",
                "Provides JavaScript code for a `MinHeap` class, adjacency list construction, and the `dijkstra` function.",
                "The implementation correctly handles directed graphs and avoids processing outdated entries, improving performance."
            ]
        },
        {
            "title": "Implementation of Huffman’s Coding Algorithm",
            "description": [
                "Implements Huffman's Coding Algorithm for lossless data compression.",
                "A greedy algorithm that constructs an optimal binary tree (Huffman Tree) based on character frequencies.",
                "Uses a min-priority queue to repeatedly merge the two nodes with the smallest frequencies.",
                "Assigns binary codes (0 for left, 1 for right) by traversing the constructed tree.",
                "Provides JavaScript code for a `PriorityQueue`, `Node` structure, tree traversal, and encoding functions.",
                "Guarantees minimum average code length for efficient data compression."
            ]
        },
        {
            "title": "Implementation of 0/1 Knapsack Algorithm",
            "description": [
                "Solves the 0/1 Knapsack Problem, aiming to maximize total value within a fixed weight capacity.",
                "Uses Dynamic Programming (DP) to break the problem into smaller overlapping subproblems.",
                "A 2D DP table `dp[i][w]` stores the maximum value for `i` items and capacity `w`.",
                "The recurrence relation considers whether to include or exclude an item based on value and weight constraints.",
                "Achieves a time and space complexity of O(n × capacity).",
                "The implementation efficiently determines the optimal solution and is widely applicable in resource allocation."
            ]
        },
        {
            "title": "Implementation of Bellman-Ford Algorithm",
            "description": [
                "Computes the shortest path from a source vertex to all other vertices in a directed weighted graph, including graphs with negative edge weights.",
                "Based on Dynamic Programming, it iteratively relaxes all edges `V-1` times.",
                "Can detect the presence of negative weight cycles, reporting an error if found.",
                "Achieves a time complexity of O(V × E) and space complexity of O(V).",
                "This implementation handles disconnected graphs and is crucial for scenarios where Dijkstra's algorithm fails due to negative weights."
            ]
        },
        {
            "title": "Implementation of Longest Common Subsequence (LCS) Algorithm",
            "description": [
                "Finds the length and actual sequence of the Longest Common Subsequence (LCS) between two strings.",
                "A fundamental problem solved using Dynamic Programming, specifically recursion with memoization in this implementation.",
                "The recurrence relation compares characters and either adds 1 to the diagonal subproblem or takes the maximum of adjacent subproblems.",
                "Achieves a time and space complexity of O(m × n).",
                "Provides JavaScript code for the `LCS` function and a `constructStr` function to reconstruct the sequence.",
                "Widely used in bioinformatics, file comparison, and version control systems."
            ]
        }
    ]
}


export { mockData,response };

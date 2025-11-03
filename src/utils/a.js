const mockData = {
  "title": "Implementations of Numerical Methods (Assignment No: 01)",
  "key_points_summary": [
    {
      "title": "Assignment Context and Details",
      "description": [
        "The document is Assignment No. 01 for the Numerical Methods course (CSE 2203) at RUET.",
        "It was submitted by Shanjid Hasan (Roll: 2203072) to Associate Professor Shyla Afroge."
      ]
    },
    {
      "title": "Numerical Integration (Question 1)",
      "description": [
        "A manual calculation was performed for $\\int_{0}^{4}(x^3+2x^2+3x+1)dx$ with $n=4$.",
        "The Exact Integral is $404/3 \\approx 134.67$.",
        "The Trapezoidal Rule result is $140$, an overestimate with an error of $16/3 \\approx 5.33$.",
        "Simpson's $1/3$ Rule result is $404/3 \\approx 134.67$, which is the exact result because the rule is exact for polynomials up to degree 3."
      ]
    },
    {
      "title": "Menu-Driven C++ Program Implementation (Question 2)",
      "description": [
        "A C++ program was written to handle three main numerical methods.",
        "**Simpson's $1/3$ Rule:** Integrates $f(x)=x^3-4x-9$ on $[0, 3]$. The result for $n=6$ is $-24.750000$.",
        "**Trapezoidal Rule:** Used for comparison; the result for $n=6$ is $-24.187500$.",
        "**Newton's Backward Interpolation:** Estimates $f(x)$ for given data. The estimated value for $f(3.5)$ is $42.875000$ using the sample data $X=[1, 2, 3, 4]$ and $f(x)=[1, 8, 27, 64]$.",
        "The algorithms, C++ source code, and output snippets for the menu, integration, and interpolation are provided."
      ]
    },
    {
      "title": "Accuracy Discussion",
      "description": [
        "Simpson's $1/3$ Rule is generally more accurate than the Trapezoidal Rule because it uses **quadratic (parabolic) interpolation** over subintervals.",
        "The Trapezoidal Rule uses simpler **linear interpolation** (trapezoids).",
        "Newton's Backward Interpolation is appropriate for estimating values near the **end of the data set**."
      ]
    }
  ]
};
function cleanText(text) {
  return text
    .replace(/\$\$/g, "")
    .replace(/\$/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\\\(/g, "")
    .replace(/\\\)/g, "")
    .replace(/\\\\/g, "");
}

const cleaned = mockData.key_points_summary.map(section => ({
  ...section,
  description: section.description.map(cleanText)
}));

console.log(cleaned);
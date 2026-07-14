# N1ghtfall
[Live Site](https://james-york2008.github.io/n1ghtfall/)

![Image of the N1ghtfall landing page on desktop](./src/assets/readmeImages/desktopN1ghtfall.webp)
![Image of the N1ghtfall landing page on mobile](./src/assets/readmeImages//mobileN1ghtfall.webp)


## Overview: 
N1ghtfall is a competitive Strinova mobile union I plan on making when the global version of the game releases. This web application will serve as a web hub for team organization and recruiting new members. The page dynamically renders a schedule, roster, and requirements to join. Currently, most of the information is placeholder data.


## Run Locally:

1. **Clone the repository:**
```bash
git clone https://github.com/james-york2008/N1ghtfall
cd N1ghtfall
```


2. **Install dependencies:**
```bash
npm install
```


3. **Start the development server:**
```bash
npm run dev
```


4. **View the app:**
Open your browser and navigate to `http://localhost:5173`


## Stack: 
- **Framework:** ReactJS 
- **Language:** TypeScript 
- **Styling:** CSS
- **Build Tool:** Vite


## Challenges Faced and Lessons Learned: 
One of the biggest issues I faced was asset managing. I largely solved this issue by replacing manual imports with Vite's method import.meta.glob. This decision improved scalability dramatically, as well as maintainability. I also replaced larger `.jpg` and `.png` assets with smaller, more performant `.webp`s.

I also faced some deployment problems that did not appear in the local environment. One of which was a white screen issue after deployment to GitHub pages. Debugging this issue and several others taught me how bundlers, routing behavior, and asset paths differ between development and production environments.

Another challenge was consistant styling across the entire product while avoiding unintended side effects. In correcting these issues, I learned the importance of scoped styling, and consistency across different files.

Overall, this project helped me gain real world experience with React project structure, debugging workflows, and TypeScript-based UI code.

## Potential Future Improvements: 
- More thoroughly standardize the visual design system.
- Replace placeholder data with real content.
- Expand the application with community focused features like a match history section, or a media gallery for clips and highlights.
- Implement automated testing with Jest to strengthen long-term maintainability and reduce regression issues as the application expands.
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

### Asset Management and Optimization
- **Scalability Bottlenecks:** Manual imports became unmanageable as the project grew
- **Vite Automation:** Transitioned to `import.meta.glob` to automate asset loading and improve maintainability
- **Performance Tuning:** Replaced large `.jpg` and `.png` files with high-performance `.webp` formats
- **Advanced Compression:** Leveraged `sharp` to re-encode images and drastically minimize bundle sizes

### Production Deployment Discrepancies
- **White Screen Build Bug:** Encountered a blank screen anomaly on GitHub Pages deployment
- **Environment Divergence:** Debugged discrepancies between local development and production environments
- **Core Learnings:** Mastered how bundlers process routing behaviors and relative asset paths during compilation

### Global vs. Scoped CSS Architecture
- **Style Bleeding:** Faced unintended side effects when styles inadvertently leaked across components
- **Visual Inconsistency:** Struggled to maintain a cohesive look across multiple disjointed files
- **Design Solution:** Learned the critical importance of scoped styling and strict design consistency


## Potential Future Improvements: 
- More thoroughly standardize the visual design system.
- Replace placeholder data with real content.
- Expand the application with community focused features like a match history section, or a media gallery for clips and highlights.
- Implement automated testing with Jest to strengthen long-term maintainability and reduce regression issues as the application expands.
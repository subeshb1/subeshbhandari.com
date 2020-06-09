import React, { Component } from 'react'

import { Link } from '@reach/router'

// import Carousel from '../../components/carousel'

// import bubble from '../../assets/images/bubble.png'
// import heap from '../../assets/images/heap.png'
// import merge from '../../assets/images/merge.png'
// import quick from '../../assets/images/quick.png'
// import bfs from '../../assets/images/bfs.png'
// import astar from '../../assets/images/a-star.png'
// import dijkstras from '../../assets/images/dijkstras.png'
// import dfs from '../../assets/images/dfs.png'
// import bfsDraw from '../../assets/images/bfs-draw.png'
// import astarDraw from '../../assets/images/a-star-draw.png'
// import dijkstrasDraw from '../../assets/images/dijkstras-draw.png'
// import dfsDraw from '../../assets/images/dfs-draw.png'
// import algoSVG from '../../../assets/svg/algorithm.svg'
// import visualizeSVG from '../../../assets/svg/visualize.svg'
// import discoverySVG from '../../../assets/svg/discovery.svg'
// import implementSVG from '../../../assets/svg/implement.svg'
// import offlineSVG from '../../../assets/svg/offline.svg'
// import crossPlatformSVG from '../../../assets/svg/cross-platform.svg'
// import userFriendlySVG from '../../../assets/svg/user-friendly.svg'
// import interactiveSVG from '../../../assets/svg/interactive.svg'

// export default class Slide extends Component {
//   render() {
//     return (
//       <Carousel height={'90vh'} interval={5000}>
//         <Carousel.Slide>
//           <div className="welcome">
//             <h1 style={{ fontSize: '1.3em' }}>Welcome To Subesh Bhandari </h1>
//             <h2 style={{ fontSize: '1em' }}>A place to...</h2>
//             <div className="cards">
//               <a className="card" href="#learn">
//                 <div className="image">
//                   <img src={algoSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Learn</div>
//                 </div>
//               </a>
//               <a className="card" href="#visualize">
//                 <div className="image">
//                   <img src={visualizeSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Visualize</div>
//                 </div>
//               </a>
//               <a className="card" href="#discover">
//                 <div className="image">
//                   <img src={discoverySVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Discover</div>
//                 </div>
//               </a>
//               <a className="card" href="#implement">
//                 <div className="image">
//                   <img src={implementSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Implement</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <div className="welcome">
//             <h2 style={{ fontSize: '1.3em' }}>
//               What Subesh Bhandari provide...
//             </h2>
//             <div className="cards">
//               <a href="#interactive" className="card">
//                 <div className="image">
//                   <img src={interactiveSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Interactive PlayGround</div>
//                 </div>
//               </a>
//               <a href="#user-friendly" className="card">
//                 <div className="image">
//                   <img src={userFriendlySVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">User Friendly UI</div>
//                 </div>
//               </a>
//               <a href="#cross-platform" className="card">
//                 <div className="image">
//                   <img src={crossPlatformSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Cross Platform</div>
//                 </div>
//               </a>
//               <a href="#offline" className="card">
//                 <div className="image">
//                   <img src={offlineSVG} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Offline Support</div>
//                 </div>
//               </a>
//             </div>
//           </div>
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <div className="welcome">
//             <h2 style={{ fontSize: '1.3em' }}>Sorting Algorithms</h2>
//             <div className="cards">
//               <Link to="/sorting/quick-sort" className="card">
//                 <div className="image">
//                   <img src={quick} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Quick Sort</div>
//                 </div>
//               </Link>
//               <Link to="/sorting/bubble-sort" className="card">
//                 <div className="image">
//                   <img src={bubble} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Bubble Sort</div>
//                 </div>
//               </Link>
//               <Link to="/sorting/heap-sort" className="card">
//                 <div className="image">
//                   <img src={heap} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Heap Sort</div>
//                 </div>
//               </Link>
//               <Link to="/sorting/merge-sort" className="card">
//                 <div className="image">
//                   <img src={merge} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Merge Sort</div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <div className="welcome">
//             <h2 style={{ fontSize: '1.3em' }}>Sorting Algorithms</h2>
//             <div className="cards">
//               <Link to="/graph-search/bfs" className="card">
//                 <div className="image">
//                   <img src={bfs} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">BFS</div>
//                 </div>
//               </Link>
//               <Link to="/graph-search/a-star" className="card">
//                 <div className="image">
//                   <img src={astar} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">A*</div>
//                 </div>
//               </Link>
//               <Link to="/graph-search/dfs" className="card">
//                 <div className="image">
//                   <img src={dfs} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">DFS</div>
//                 </div>
//               </Link>
//               <Link to="/graph-search/dijkstras" className="card">
//                 <div className="image">
//                   <img src={dijkstras} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Dijkstras</div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </Carousel.Slide>
//         <Carousel.Slide>
//           <div className="welcome">
//             <h2 style={{ fontSize: '1.3em' }}>Graph Algorithms</h2>
//             <div className="cards">
//               <Link to="/drawable-graph/bfs" className="card">
//                 <div className="image">
//                   <img src={bfsDraw} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">BFS</div>
//                 </div>
//               </Link>
//               <Link to="/drawable-graph/a-star" className="card">
//                 <div className="image">
//                   <img src={astarDraw} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">A*</div>
//                 </div>
//               </Link>
//               <Link to="/drawable-graph/dfs" className="card">
//                 <div className="image">
//                   <img src={dfsDraw} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">DFS</div>
//                 </div>
//               </Link>
//               <Link to="/drawable-graph/dijkstras" className="card">
//                 <div className="image">
//                   <img src={dijkstrasDraw} alt="" />
//                 </div>
//                 <div className="description">
//                   <div className="heading">Dijkstras</div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </Carousel.Slide>
//       </Carousel>
//     )
//   }
// }

export default function test() {
return null
}
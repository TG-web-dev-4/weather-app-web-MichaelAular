// import React, { useState } from "react";

// export default function Days()  {
//     const {content } = accordionData;
//     const [isActive, setIsActive] = useState(false);
//     const current = new Date();
//     const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

//     const accordionData = {
//         content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
//           laborum cupiditate possimus labore, hic temporibus velit dicta earum
//           suscipit commodi eum enim atque at? Et perspiciatis dolore iure
//           voluptatem.`,
//       };

//     return (
//     <div className="accordion-day">
//         <div className="accordion-item_day" onClick={() => setIsActive(!isActive)}>
//             {date} <div className="accordion-item_toggle">{isActive ? "⯅" : "⯆"}</div>
//         </div>
//         {isActive && <div className="accordion-item_content">{content}</div>}
//     </div>)
// }

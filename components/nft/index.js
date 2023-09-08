import MrFox from "../../styles/avatars/MrFox.svg";
import Bear from "../../styles/images/animals_collection/bear.svg";
import Cat from "../../styles/images/animals_collection/cat.svg";
import Dog from "../../styles/images/animals_collection/dog.svg";

import Shroomie from "../../styles/avatars/Shroomie.svg";
import Mushroom1 from "../../styles/images/mushrooms_collection/first_mushroom.svg";
import Mushroom2 from "../../styles/images/mushrooms_collection/second_mushroom.svg";
import Mushroom3 from "../../styles/images/mushrooms_collection/third_mushroom.svg";

import BeKind2Robots from "../../styles/avatars/BeKind2Robots.svg";
import Disco1 from "../../styles/images/disco_collection/first_disco.svg";
import Disco2 from "../../styles/images/disco_collection/second_disco.svg";
import Disco3 from "../../styles/images/disco_collection/third_disco.svg";


const collections = [
    {
      type: "animals",
      0: <Dog id="#0"/>,
      1: <Cat id="#1"/>,
      2: <Bear id="#2"/>,
      title: "DSGN Animals",
      authorIcon: <MrFox />,
      authorName: "MrFox",
    },
    {
      type: "mushrooms",
      0: <Mushroom1 id="#3"/>,
      1: <Mushroom2 id="#4"/>,
      2: <Mushroom3 id="#5"/>,
      title: "Magic Mushrooms",
      authorIcon: <Shroomie />,
      authorName: "Shroomie",
    },
    {
      type: "disco",
      0: <Disco1 id="#6"/>,
      1: <Disco2 id="#7"/>,
      2: <Disco3 id="#8"/>,
      title: "Disco Machines",
      authorIcon: <BeKind2Robots />,
      authorName: "BeKind2Robots",
    },
  ];

// getting NFT based on ID

  const Nft = ({type, id}) => {

    const findComponentById = (id) => {
        for (const collection in collections) {
            for (const key in collections[collection]) {
                if (collections[collection][key].props && collections[collection][key].props.id === id) {
                    return collections[collection][key]
                }
            }
        }
        return <div>nerasta</div>;
    }

    const component = findComponentById(id);

    return (<><br/><br/><br/><div>{component}</div></>)
  };


  export default Nft;
import styles from "./Nft.module.css"

import Nft from '../../nft'

const NftInfoPage = ({type, id}) => {
    return <div className={styles.container}><div className={styles.nft_svg}><Nft id={id}/></div></div>
}

export default NftInfoPage
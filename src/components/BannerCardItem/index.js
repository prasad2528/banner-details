// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="title">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="button">
          Show more
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem

// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItemDetails, clickOnTabItem, isActive} = props
  const {tabId, displayText} = tabItemDetails

  const onClicking = () => {
    clickOnTabItem(tabId)
  }

  const activeTabClassName = isActive ? 'tab-btn' : ''

  return (
    <li className="list-item">
      <button className={`tab-head ${activeTabClassName}`} onClick={onClicking}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

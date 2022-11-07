import filter from "../assets/filter.svg"

const FilterButton = (props) => {
    const { setShowFilter } = props
    
    const handleClick = () => {
        setShowFilter(true)
    }

    return (
        <button className="filterBtn" onClick={handleClick}>
            Filter <img className="filterIcon" src={filter}  alt="filter icon"/>
        </button>
    )
}

export default FilterButton
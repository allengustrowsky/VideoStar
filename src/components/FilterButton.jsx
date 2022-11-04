
const FilterButton = (props) => {
    const { setShowFilter } = props
    
    const handleClick = () => {
        setShowFilter(true)
    }

    return (
        <button onClick={handleClick}>
            Filter button
        </button>
    )
}

export default FilterButton
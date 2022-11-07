
const SortButton = (props) => {
    const { setShowSort } = props
    
    const handleClick = () => {
        setShowSort(true)
    }

    return (
        <button onClick={handleClick}>
            Sort button
        </button>
    )
}

export default SortButton
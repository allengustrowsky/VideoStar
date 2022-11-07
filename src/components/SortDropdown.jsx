const SortDropdown = (props) => {
    const { sortType, setSortType,} = props

    // Update sort state
    const handleClick = (event) => {
        setSortType(event.target.value)
    }

    return (
        <>
            <select className="sortDropdown" name="sortDropdown" id="sortDropdown">
                <option value="hiddenDefault" selected disabled hidden>Sort...</option>
                <option value="title" className="sortItem" selected={sortType === "title"} onClick={handleClick}>Title</option>
                <option value="length" className="sortItem" selected={sortType === "length"} onClick={handleClick}>Length</option>
                <option value="free" className="sortItem" selected={sortType === "free"} onClick={handleClick}>Free</option>
                <option value="paid" className="sortItem" selected={sortType === "paid"} onClick={handleClick}>Paid</option>
            </select>
        </>
    )
}

export default SortDropdown
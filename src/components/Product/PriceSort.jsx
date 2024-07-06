import PropTypes from 'prop-types';

const PriceSort = ({ sortOrder, handleSortChange }) => {
    return (
        <>
            <div className="pt-5">
                <h3 className="text-xl font-medium py-3">Sort By Price</h3>
                <div className="space-y-2 flex flex-col">
                    <button
                        onClick={() => handleSortChange('asc')}
                        className={`py-2 px-4 rounded-lg w-1/2 lg:w-[80%] ${sortOrder === 'asc' ? 'bg-green-200 text-green-700' : 'bg-gray-100  hover:bg-gray-200'
                            } `}
                    >
                        Price: Low to High
                    </button>
                    <button
                        onClick={() => handleSortChange('desc')}
                        className={`py-2 px-4 rounded-lg w-1/2 lg:w-[80%] ${sortOrder === 'desc' ? 'bg-green-200 text-green-700' : 'bg-gray-100  hover:bg-gray-200'
                            }`}
                    >
                        Price: High to Low
                    </button>
                </div>
            </div>
        </>
    )
}
PriceSort.propTypes = {
    sortOrder: PropTypes.string,
    handleSortChange: PropTypes.func
}
export default PriceSort
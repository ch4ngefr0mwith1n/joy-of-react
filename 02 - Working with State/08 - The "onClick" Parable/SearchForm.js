import React from 'react';

function SearchForm({ runSearch }) {
    const [searchTerm, setSearchTerm] = React.useState('');

    return (
        <form
            className="search-form"
            // kada radimo sa formama, potreban nam je "form submit" event:
            onSubmit={event => {
                // nakon odrađenog "submit"-a, forma neće biti "reaload"-ovana
                event.preventDefault();
                runSearch(searchTerm);
            }}
        >
            <input
                type="text"
                value={searchTerm}
                onChange={event => {
                    setSearchTerm(event.target.value);
                }}
            />
            <button>
                Search!
            </button>
        </form>
    );
}

export default SearchForm;
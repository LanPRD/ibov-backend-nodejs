import { FilterStyle } from "./styles";

const Filter = () => {
  return (
    <FilterStyle>
      <h2>Filters</h2>
      <form id="filter_stocks">
        <div>
          <p>Ticker</p>
          <label htmlFor="ticker">Ticker</label>
          <input name="ticker" type="text" placeholder="Ticker" />
        </div>

        <div>
          <p>Price</p>
          <label htmlFor="minPrice">Min</label>
          <input name="minPrice" type="text" placeholder="R$ 20,00" />
          <label htmlFor="maxPrice">Max</label>
          <input name="maxPrice" type="text" placeholder="R$ 30,50" />
        </div>

        <div>
          <p>DY</p>
          <label htmlFor="minDy">Min</label>
          <input name="minDy" type="text" placeholder="9,00" />
          <label htmlFor="maxDy">Max</label>
          <input name="maxDy" type="text" placeholder="10,00" />
        </div>

        <div>
          <p>ROE</p>
          <label htmlFor="minRoe">Min</label>
          <input name="minRoe" type="text" placeholder="0,90" />
          <label htmlFor="maxRoe">Max</label>
          <input name="maxRoe" type="text" placeholder="1,10" />
        </div>

        <div>
          <p>ROA</p>
          <label htmlFor="minRoa">Min</label>
          <input name="minRoa" type="text" placeholder="0,90" />
          <label htmlFor="maxRoa">Max</label>
          <input name="maxRoa" type="text" placeholder="1,10" />
        </div>

        <div>
          <p>VPA</p>
          <label htmlFor="minVpa">Min</label>
          <input name="minVpa" type="text" placeholder="0,90" />
          <label htmlFor="maxVpa">Max</label>
          <input name="maxVpa" type="text" placeholder="1,10" />
        </div>
      </form>

      <button form="filter_stocks" type="submit">
        Filter
      </button>
      <button>Clear Filter</button>
    </FilterStyle>
  );
};

export default Filter;

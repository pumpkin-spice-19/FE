import React from "react"

export const Addproject = () => {
  return (
    <div>
      <h3>Add project</h3>
      <form>
        <label>Project name</label>
        <input type="text" />

        <label>Project color</label>
        <select name="colors">
          <option value="#">Charcoal</option>
          <option value="#">Berry Red</option>
          <option value="#">Red</option>
          <option value="#">Orange</option>
        </select>

        <label>Add to favorites</label>
        <input type="checkbox" name="favorites" value="true" />

        <hr />

        <button>Cancel</button>
        <button>Add</button>
      </form>
    </div>
  )
}

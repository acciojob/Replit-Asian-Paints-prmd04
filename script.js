const changeBtn = document.getElementById("change_button");
  const resetBtn = document.getElementById("reset_button");

  function resetGrid() {
    document.querySelectorAll(".grid-item").forEach(item => {
      item.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });
  }

  changeBtn.addEventListener("click", () => {
    const blockId = document.getElementById("block_id").value;
    const color = document.getElementById("colour_id").value;

    resetGrid();

    const block = document.getElementById(blockId);
    if (block) {
      block.style.backgroundColor = color;
    }
  });

  resetBtn.addEventListener("click", resetGrid);
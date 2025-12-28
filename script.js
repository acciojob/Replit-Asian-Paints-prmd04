//your JS code here. If required.
const changeButton = document.getElementById("change_button");
    const resetButton = document.getElementById("Reset");

    changeButton.addEventListener("click", () => {
      const blockId = document.getElementById("block_id").value;
      const color = document.getElementById("colour_id").value;

      // Reset all blocks to transparent
      const allBlocks = document.querySelectorAll(".grid-item");
      allBlocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });

      // Change selected block color
      const selectedBlock = document.getElementById(blockId);
      if (selectedBlock) {
        selectedBlock.style.backgroundColor = color;
      }
    });

    resetButton.addEventListener("click", () => {
      const allBlocks = document.querySelectorAll(".grid-item");
      allBlocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });

      document.getElementById("block_id").value = "";
      document.getElementById("colour_id").value = "";
    });
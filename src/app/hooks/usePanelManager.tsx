'use client'
import { useEffect, useState } from "react";
import { Panel } from "../shared/interfaces/Panel.interface";
import numberRandom from "../shared/helpers/numberRandom";
import { toast } from "sonner";

export function usePanelManager(quantityPanel: number) {
  const listContentPanels: Panel[] = Array(quantityPanel || 16)
    .fill("")
    .map((_, i) => ({
      id: i + 1,
      isMark: false,
    }));
  const [panels, setPanel] = useState<Panel[]>(listContentPanels);

  function markPanel(id: number): void {
    setPanel((prevPanel) => {
      return prevPanel.map((panel) =>
        panel.id !== id ? panel : { ...panel, isMark: !panel.isMark }
      );
    });
    
    toast.warning(`Main System : Panel ${id} is broken`);
  }

  function markRandomPanels(max: number): void {
    const numbers: number[] = [];
    let counter = 0;

    while (counter < max) {
      const idRandom = numberRandom(quantityPanel);
      if (numbers.includes(idRandom)) continue;

      numbers.push(idRandom);
      markPanel(idRandom);
      counter++;
    }
  }

  useEffect(() => {
    markRandomPanels(3);
  }, []);

  return {
    panels,
    markPanel,
  };
}

import { useEffect, useState } from "react";
import { Panel } from "../shared/interfaces/Panel.interface";
import numberRandom from "../shared/helpers/numberRandom";
import { toast } from "sonner";

interface ToastPanelConfig {
  id: number;
  quantityPanel: number;
  totalPanelBroken: number;
}

export function usePanelManager(quantityPanel: number) {
  const listContentPanels: Panel[] = Array.from(
    { length: quantityPanel || 16 },
    (_, i) => ({ id: i, isMark: false })
  );
  const [panels, setPanel] = useState<Panel[]>(listContentPanels);

  function markPanel(id: number): void {
    setPanel((prevPanels) => {
      const newPanels = prevPanels.map((panel) =>
        panel.id !== id ? panel : { ...panel, isMark: true }
      );
      const totalPanelBroken = newPanels.filter((panel) => panel.isMark).length;

      handleMessagePanel({ id, quantityPanel, totalPanelBroken });

      return newPanels;
    });
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

  function handleMessagePanel(config: ToastPanelConfig): void {
    const { id, quantityPanel, totalPanelBroken } = config;

    toast.warning(`Main System : Panel ${id} is broken`);

    if (totalPanelBroken === Math.ceil(quantityPanel / 2)) {
      toast.error(
        `Main System : Half of the panels are broken (${totalPanelBroken})`
      );
      return;
    }

    if (totalPanelBroken === quantityPanel) {
      toast.error("Fail System : All panels are broken");
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

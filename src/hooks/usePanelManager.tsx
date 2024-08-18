import { useEffect, useState, useRef } from "react";
import { Panel } from "@/app/shared/interfaces/Panel.interface";
import numberRandom from "@/app/shared/helpers/numberRandom";
import { toast } from "sonner";

interface ToastPanelConfig {
  id: number;
  quantityPanel: number;
  totalPanelBroken: number;
}

export function usePanelManager(quantityPanel: number) {
  const listContentPanels: Panel[] = Array.from(
    { length: quantityPanel || 16 },
    (_, i) => ({ id: i + 1, isMark: false })
  );
  const [panels, setPanel] = useState<Panel[]>(listContentPanels);
  const [recoveryTime, setRecoveryTime] = useState<number>(5000);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  function markPanel(id: number): void {
    setPanel((prevPanels) => {
      const newPanels = toggleMarkPanel(prevPanels, id);
      const totalPanelBroken = newPanels.filter((panel) => panel.isMark).length;

      handleMessagePanel({ id, quantityPanel, totalPanelBroken });

      if (totalPanelBroken < quantityPanel) {
        const timeoutId = setTimeout(() => repairPanel(id), recoveryTime);
        timeoutsRef.current.push(timeoutId);
      }

      if (totalPanelBroken === quantityPanel) clearAllTimeouts();

      return newPanels;
    });

    setRecoveryTime((prevRecoveryTime) => prevRecoveryTime + 1000);
  }

  function toggleMarkPanel(panels: Panel[], id: number): Panel[] {
    return panels.map((panel) =>
      panel.id !== id ? panel : { ...panel, isMark: !panel.isMark }
    );
  }

  function repairPanel(id: number): void {
    setPanel((prevPanels) => {
      const newPanels = toggleMarkPanel(prevPanels, id);
      toast.success(`Main System : Panel ${id} has been repaired`);
      toast.warning(`Main System : Reduced Recovery Time`);

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
      toast.error("Failed recovery system");
    }
  }

  function clearAllTimeouts() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }

  useEffect(() => {
    markRandomPanels(3);

    return () => clearAllTimeouts();
  }, []);

  return {
    panels,
    markPanel,
    brokenPanels: panels.reduce(
      (prev, curr) => (curr.isMark ? prev + 1 : prev),
      0
    ),
  };
}

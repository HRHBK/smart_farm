export const stats = [
  { id: 's1', label: 'Fields', value: '12' },
  { id: 's2', label: 'Workers', value: '8' },
  { id: 's3', label: 'Pending Tasks', value: '3' },
];

export const miniTrend = [
  { date: '2026-05-10', amount: 120000 },
  { date: '2026-05-15', amount: 80000 },
  { date: '2026-05-20', amount: 150000 },
  { date: '2026-05-25', amount: 90000 },
  { date: '2026-05-30', amount: 110000 },
  { date: '2026-06-05', amount: 130000 },
  { date: '2026-06-10', amount: 95000 },
];

export const transactions = [
  { id: 't1', type: 'income' as const,  amount: 350000, description: 'Maize harvest — bulk sale to Douala distributor', date: '2026-06-10', status: 'paid' as const, payment_method: 'mobile_money' as const, category: { id: 'c1', name: 'Crop Sales', icon: '🌾' } },
  { id: 't2', type: 'expense' as const, amount: 45000,  description: 'NPK Fertilizer (50 kg bags × 3)',              date: '2026-06-08', status: 'paid' as const, payment_method: 'cash' as const, category: { id: 'c2', name: 'Farm Inputs', icon: '🧪' } },
  { id: 't3', type: 'income' as const,  amount: 90000,  description: 'Eggs collection — weekly market run',          date: '2026-06-05', status: 'paid' as const, payment_method: 'cash' as const, category: { id: 'c3', name: 'Livestock', icon: '🐔' } },
  { id: 't4', type: 'expense' as const, amount: 75000,  description: 'Seasonal labor — weeding crew (5 workers)',    date: '2026-06-03', status: 'paid' as const, payment_method: 'mobile_money' as const, category: { id: 'c4', name: 'Labor', icon: '👷' } },
  { id: 't5', type: 'income' as const,  amount: 120000, description: 'Vegetable sales — tomatoes & peppers',         date: '2026-06-01', status: 'paid' as const, payment_method: 'bank_transfer' as const, category: { id: 'c1', name: 'Crop Sales', icon: '🌾' } },
  { id: 't6', type: 'expense' as const, amount: 30000,  description: 'Diesel for irrigation pump',                   date: '2026-05-28', status: 'paid' as const, payment_method: 'cash' as const, category: { id: 'c5', name: 'Equipment', icon: '⛽' } },
  { id: 't7', type: 'expense' as const, amount: 60000,  description: 'Veterinary checkup for poultry flock',         date: '2026-05-25', status: 'pending' as const, payment_method: 'bank_transfer' as const, category: { id: 'c3', name: 'Livestock', icon: '🐔' } },
  { id: 't8', type: 'income' as const,  amount: 200000, description: 'Cassava tubers — cooperative delivery',        date: '2026-05-22', status: 'paid' as const, payment_method: 'mobile_money' as const, category: { id: 'c1', name: 'Crop Sales', icon: '🌾' } },
  { id: 't9', type: 'expense' as const, amount: 15000,  description: 'Seed purchase — improved plantain suckers',    date: '2026-05-20', status: 'overdue' as const, payment_method: 'cash' as const, category: { id: 'c2', name: 'Farm Inputs', icon: '🧪' } },
  { id: 't10', type: 'income' as const, amount: 180000, description: 'Palm oil — processed and sold locally',        date: '2026-05-18', status: 'paid' as const, payment_method: 'cash' as const, category: { id: 'c6', name: 'Processed Goods', icon: '🫒' } },
];

export const tasks = [
  { id: 'g1', title: 'Irrigate north field',         assignee: 'Aminata',  dueDate: '2026-06-16', status: 'pending' },
  { id: 'g2', title: 'Repair water pump',             assignee: 'Kofi',     dueDate: '2026-06-18', status: 'in_progress' },
  { id: 'g3', title: 'Harvest peppers — south plot',  assignee: 'Adjoa',    dueDate: '2026-06-20', status: 'pending' },
  { id: 'g4', title: 'Apply pesticide to maize',      assignee: 'Moussa',   dueDate: '2026-06-14', status: 'done' },
  { id: 'g5', title: 'Feed poultry — morning round',  assignee: 'Fatou',    dueDate: '2026-06-15', status: 'done' },
  { id: 'g6', title: 'Prune plantain suckers',        assignee: 'Aminata',  dueDate: '2026-06-22', status: 'pending' },
];

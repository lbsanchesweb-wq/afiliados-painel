export enum Role {
  ADMIN = 'admin',
  AFFILIATE = 'affiliate'
}

export enum OrderStatus {
  AWAITING_PAYMENT = 'Aguardando Pagamento',
  COMPLETED = 'Pedido Concluído'
}

export enum WithdrawalStatus {
  PENDING = 'Pendente',
  COMPLETED = 'Concluído'
}

export interface User {
  id: string;
  email: string;
  password: string;
  role: Role;
  brandName?: string;
  logo?: string; // base64
  profitPercentage: number;
  pixKey?: string;
  promotionalUrl?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  priceAtPurchase: number;
}

export interface Order {
  id: string;
  affiliateId: string;
  items: OrderItem[];
  status: OrderStatus;
  createdAt: string; // ISO date string
  isWithdrawn: boolean;
}

export interface Withdrawal {
  id: string;
  affiliateId: string;
  amount: number;
  requestedAt: string; // ISO date string
  pixKeyAtRequest: string;
  status: WithdrawalStatus;
  receiptImageUrl?: string; // base64
  completedAt?: string; // ISO date string
}
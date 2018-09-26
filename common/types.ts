export interface BridgeV1 {
  launch: () => void;
}

export interface AppWindow extends Window {
  bridgeV1?: BridgeV1;
}

import { Access } from "payload/types";

export const publicAccess : Access = () => true

export const adminAccess : Access = ({ req: { user } }) => !!user
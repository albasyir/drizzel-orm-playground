import crypto from "crypto"

export function generateRandomString(length: number) {
  return crypto.randomBytes(length)
    .toString('base64')
    .slice(0, length);
}
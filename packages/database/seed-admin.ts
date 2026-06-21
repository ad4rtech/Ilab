import { PrismaClient } from "@prisma/client"
import bcrypt from "bcryptjs"
import crypto from "crypto"

const prisma = new PrismaClient()

async function main() {
  const email = "admin@ilabgrowth.com"
  const password = crypto.randomBytes(9).toString("base64").replace(/[+/=]/g, "").slice(0, 12)
  const hashedPassword = await bcrypt.hash(password, 10)

  const admin = await prisma.user.upsert({
    where: { email },
    update: { password: hashedPassword, role: "ADMIN" },
    create: { email, name: "Dr. Ifeoma Obi", password: hashedPassword, role: "ADMIN" },
  })

  console.log("\n=== Admin account ready ===")
  console.log("Email:   ", admin.email)
  console.log("Password:", password)
  console.log("============================\n")
  console.log("Save this password now \u2014 it will not be shown again.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())

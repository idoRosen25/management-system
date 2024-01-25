-- CreateTable
CREATE TABLE "invites" (
    "email" VARCHAR(1024) NOT NULL,
    "role" "Role" NOT NULL,
    "team_id" TEXT NOT NULL,

    CONSTRAINT "invites_pkey" PRIMARY KEY ("email","team_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "invites_email_key" ON "invites"("email");

-- AddForeignKey
ALTER TABLE "invites" ADD CONSTRAINT "invites_email_fkey" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

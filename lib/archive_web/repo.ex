defmodule ArchiveWeb.Repo do
  use Ecto.Repo,
    otp_app: :archive_web,
    adapter: Ecto.Adapters.Postgres
end

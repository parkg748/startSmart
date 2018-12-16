# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_16_215815) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "backings", force: :cascade do |t|
    t.integer "project_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_backings_on_project_id"
    t.index ["user_id"], name: "index_backings_on_user_id"
  end

  create_table "categories", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
    t.string "subcategories", default: [], array: true
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.boolean "digital", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "reward_id"
  end

  create_table "projects", force: :cascade do |t|
    t.integer "duration", default: 0, null: false
    t.boolean "limit", default: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "country"
    t.string "title"
    t.string "description"
    t.integer "pledge_amt"
    t.date "eta"
    t.string "shipping"
    t.string "city"
    t.string "state"
    t.integer "funding_goal"
    t.integer "category_id"
    t.string "subcategory"
    t.string "challenges"
    t.string "editor_html"
    t.integer "time"
    t.index ["user_id"], name: "index_projects_on_user_id"
  end

  create_table "rewards", force: :cascade do |t|
    t.string "title"
    t.string "description"
    t.integer "pledge_amt"
    t.date "eta"
    t.string "shipping"
    t.integer "project_id"
    t.boolean "limit", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "biography"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "google_analytics"
    t.string "websites", default: [], array: true
    t.index ["email"], name: "index_users_on_email"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end

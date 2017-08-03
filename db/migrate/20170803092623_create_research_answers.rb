class CreateResearchAnswers < ActiveRecord::Migration
  def up
    drop_table :users
    create_table :research_answers do |t|
      t.integer :q1_value, default: nil
      t.integer :q2_value, default: nil
      t.timestamps null: false
    end
  end

  def down
    create_table :users do |t|
      t.string :name
      t.timestamps null: false
    end
    drop_table :research_answers
  end
end

class DropSmartVariablePermissions < ActiveRecord::Migration[5.2]
  def change
    Permission.where(resource_type: 'VariableLookupKey').delete_all
  end
end

"""final

Revision ID: b50d16a0cc4c
Revises: f54d8f82f1ae
Create Date: 2023-04-19 14:59:13.059855

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b50d16a0cc4c'
down_revision = 'f54d8f82f1ae'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('unit_price', sa.Float(), nullable=True))
        batch_op.drop_column('price')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('products', schema=None) as batch_op:
        batch_op.add_column(sa.Column('price', sa.FLOAT(), nullable=True))
        batch_op.drop_column('unit_price')

    # ### end Alembic commands ###

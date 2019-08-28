<template>
  <div class="structure">
    <div class="flex horizontal v-m t-lr">
      <h2 class="page-title">组织架构</h2>
      <Button @click="modal.add = true">添加</Button>
    </div>
    <Tree :data="list" :render="renderContent"></Tree>
    <Modal
      v-model="modal.add"
      title="新增组织架构"
      @on-ok="handleAdd">
      <Input v-model="form.title" :placeholder="placeholder"/>
    </Modal>
  </div>
</template>
<script>
export default {
  computed: {
    list () {
      return this.$store.state.structureList
    }
  },
  data() {
    return {
      placeholder: '请输入！',
      buttonProps: {
        type: "default",
        size: "small"
      },
      modal: {
        add: false
      },
      form: {
        parentId: '',
        title: '',
        topic: 'user'
      }
    };
  },
  created () {
    this.$store.dispatch('ActionStructureList', this)
  },
  methods: {
    handleAdd () {
      this.$store.dispatch('ActionStructureUpdate', this)
      this.form.parentId = ''
      this.form.title = ''
    },
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h(
            "span",
            {
              style: {
                display: "inline-block",
                float: "right",
                marginRight: "32px"
              }
            },
            [
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-add"
                }),
                style: {
                  marginRight: "8px"
                },
                on: {
                  click: () => {
                    console.log(data)
                    this.form.parentId = data._id
                    this.placeholder = data.title
                    this.modal.add = true
                  }
                }
              }),
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-remove"
                }),
                on: {
                  click: () => {
                    this.remove(root, node, data);
                  }
                }
              })
            ]
          )
        ]
      );
    },
    append(data) {
      const children = data.children || [];
      children.push({
        title: "appended node",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    }
  }
};
</script>
<style lang="scss">
.ivu-tree ul{
  font-size:0.7rem;
}
</style>

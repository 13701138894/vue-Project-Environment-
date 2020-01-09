/**
 * Created by OXOYO on 2019/7/8.
 *
 * 椭圆
 */
import Global from '@antv/g6/src/global'
import Util from '@antv/g6/src/util'
import base from './base'

export default {
  name: 'ellipse',
  extendName: 'ellipse',
  options: {
    ...base,
    shapeType: 'path',
    getShapeStyle (cfg) {
      const size = this.getSize(cfg)
      const width = size[0]
      const height = size[1]
      const x = 0 - width / 2
      const y = 0 - height / 2
      const path = [
        // 左顶点
        [ 'M', -width / 2, 0 ],
        // 上弧
        [ 'A', width / 2, height / 2, 0, 1, 1, width / 2, 0 ],
        // 下弧
        [ 'A', width / 2, height / 2, -180, 1, 1, -width / 2, 0 ],
        [ 'Z' ]
      ]
      const color = cfg.color || Global.defaultNode.color
      const style = Util.mix({}, Global.defaultNode.style, {
        // 节点的位置在上层确定，所以这里仅使用相对位置即可
        x,
        y,
        width,
        height,
        path,
        stroke: color
      }, cfg.style)
      return style
    }
  }
}
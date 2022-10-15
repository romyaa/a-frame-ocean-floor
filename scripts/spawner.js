const spawnCountdown = 100;

AFRAME.registerComponent('spawner', {
  
    init: function () {
      this.count = 0;
    },

    getWorldPosition: function () {
      var mesh = this.el.object3D;
      mesh.updateMatrixWorld();
  
      var pos = new THREE.Vector3();
      var rot = new THREE.Quaternion();
      var scale = new THREE.Vector3();
  
      mesh.matrixWorld.decompose(pos, rot, scale);
      return pos;
    },

    tick: function () {
      if (this.count > spawnCountdown) {
        this.count = 0;
			  const el = document.createElement('a-entity');
        el.setAttribute('gltf-model', '/ga-3d-web/GLB/Shark.glb');
        el.setAttribute('position', {x: this.getWorldPosition().x, y: this.getWorldPosition().y, z: this.getWorldPosition().z});
        el.setAttribute('scale', new THREE.Vector3(0.03, 0.03, 0.03));
        el.setAttribute('material', 'fog: true');
        document.querySelector('a-scene').appendChild(el);
      }
      this.count++;
    },
});
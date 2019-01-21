
<div class="event-container">
    <div class="event-header">
      <p class="event-headline">ADD EVENT</p>
      {{diagnostic}}
    </div>
    <div class="event-info">
      <mat-form-field class="event-form">
        <div class="form-group">
          <!-- <label for="title">Title:</label> -->
          <input matNativeControl type="text" class="form-control" id="title" required [(ngModel)]="newEvent.title" name="title"
            placeholder="Event Title">
        </div>

        <div class="form-group">
          <mat-label for="startTime" class="form-start-time">Time for event to Start</mat-label>
          <input matNativeControl type="text" class="form-control" id="startTime" required [(ngModel)]="newEvent.startTime" name="startTime"
            placeholder="00:00">
        </div>

        <div class="form-capture">
          <input matNativeControl type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" (change)="onFileSelected($event)"
            class="img-add">
          <img src="{{selectedFile}}">
        </div>
        <button mat-button type="button" (click)="onUpload()" class="form-btn form-upload">UPLOAD IMAGE</button>

        <button mat-buton type="submit" class="btn btn-success" class="form-btn form-submit">SUBMIT</button>

      </mat-form-field>
    </div>

  </div>